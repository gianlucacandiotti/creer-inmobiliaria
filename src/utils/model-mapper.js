import { get } from "lodash-es"

/**
 * Converts one type of object to another, in this case to/from our Models to
 * plain API response objects.
 * @param {object} sourceObj The source object, either a Model or a plain API response object
 * @param {array} mapping An array of arrays, the inner arrays containing key mappings between objects.
 *                        Inner array format can be either ['modelPropertyKey', ['apiPropertyKey'] or
 *                        ['modelPropertyKey', apiToModelTransformer(), modelToApiTransformer()]
 * @param {bool} isMappingModelToApi True if we are taking a Model object an
 *                                   mapping to an API response object, otherwise false.
 */
const mappingReducer = (sourceObj, mapping) => {
  const targetMapIndex = 0
  const sourceMapIndex = 1

  // Iterate through each element of the `mapping` object,
  // and map the source property to the target property.
  return mapping.reduce((targetObj, mapEl) => {
    if (mapEl.length === 1) {
      // We are using mapping functions to generate the result.
      // Process and Object.assign the result.
      if (mapEl[0] !== null) {
        const result = mapEl[0](sourceObj)
        Object.assign(targetObj, result)
      }
    } else {
      // Just a simple straight mapping conversion.
      targetObj[mapEl[targetMapIndex]] = get(sourceObj, mapEl[sourceMapIndex])
    }

    return targetObj
  }, {})
}

/**
 * Converts a plain API response object to a Model.
 * @param {object} apiObject The API response to convert to a Model
 * @param {array} modelMap An array of arrays, the inner arrays containing key mappings between objects.
 *                         Inner array format can be either ['modelPropertyKey', ['apiPropertyKey'] or
 *                         ['modelPropertyKey', apiToModelTransformer(), modelToApiTransformer()]
 * @param {Prototype} modelPrototype The type of model we are creating (e.g., User)
 */
export const mapApiToModel = (apiObject, modelMap, modelPrototype) => {
  const data = mappingReducer(apiObject, modelMap)
  return new modelPrototype(data)
}

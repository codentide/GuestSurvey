/**
 * all imports here so can be exported to global context for ease of use
*/
// const { Amplify, API, graphqlOperation } = require('aws-amplify/dist/aws-amplify')
const amplify = require('aws-amplify/dist/aws-amplify')


global.window.modules = {
    'aws-amplfy': amplify
}

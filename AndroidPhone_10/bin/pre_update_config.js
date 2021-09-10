'use strict'

/**
 * [command]
 */

const target_filename = 'codecept.android.conf.json'
console.log('')
console.log('-----')
console.log(` [target file] ${target_filename}`)
console.log('-----')
console.log('')

const process_argv = process.argv
const env_params = process.env

try {
  const fs = require('fs')
  const path_to_config_json = `${process.cwd()}/${target_filename}`
  const obj_config_json = JSON.parse(fs.readFileSync(path_to_config_json, 'utf8'));

  let DEVICEFARM_LOG_DIR = process.argv[2]
//  let DEVICEFARM_APP_PATH = process.argv[3]
  let DEVICEFARM_DEVICE_PLATFORM_NAME = process.argv[3]
  let DEVICEFARM_DEVICE_NAME = process.argv[4]
  let DEVICEFARM_DEVICE_OS_VERSION = process.argv[5]
    if(process.argv[2].length != 0) {
      DEVICEFARM_LOG_DIR = process.argv[2]
      obj_config_json.output = DEVICEFARM_LOG_DIR
    }

//    if(process.argv[3].length != 0) {
//      DEVICEFARM_APP_PATH = process.argv[3]
//      obj_config_json.helpers.Appium.app = DEVICEFARM_APP_PATH
//    }

    if(process.argv[3].length != 0) {
      DEVICEFARM_DEVICE_PLATFORM_NAME = process.argv[3]
      obj_config_json.helpers.Appium.platform = DEVICEFARM_DEVICE_PLATFORM_NAME
    }

    if(process.argv[4].length != 0) {
      DEVICEFARM_DEVICE_NAME = process.argv[4]
      obj_config_json.helpers.Appium.desiredCapabilities.deviceName = DEVICEFARM_DEVICE_NAME
      obj_config_json.helpers.Appium.desiredCapabilities.udid = DEVICEFARM_DEVICE_NAME
      obj_config_json.helpers.Appium.desiredCapabilities.platformVersion = DEVICEFARM_DEVICE_OS_VERSION
    }

  // print config.android.json
  console.log('-----')
  console.log(' [reviced config.ios.json]', obj_config_json)
  console.log(' [reviced config.ios.json > desiredCapabilities]', obj_config_json.helpers.Appium.desiredCapabilities)
  console.log('-----')

  fs.writeFileSync(path_to_config_json, JSON.stringify(obj_config_json, null, '  '), {encoding:'utf8',flag:'w'})
} catch(e) {
  console.log(`[ERROR] codecept.android.conf.json (${JSON.stringify(e, null, ' ')})`)
}

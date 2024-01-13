// // eslint-disable-next-line spaced-comment
// /// <reference types="nativewind/types" />

// declare module '@env' {
//   export const API_URL: string;
// }

// interface IBaseProp {
//   children: ReactNode;
//   style?: StyleProp<any>;
// }
// declare module '@kafudev/react-native-vconsole';
// declare module 'react-native-config' {
//   export interface NativeConfig {
//     /** 环境标识 */
//     Env:
//       | 'dev1'
//       | 'dev2'
//       | 'dev3'
//       | 'dev4'
//       | 'uat1'
//       | 'prod'
//       | 'stg'
//       | 'stg1'
//       | 'stg2'
//       | 'stg3'
//       | 'stg4';
//     EnvType: 'dev' | 'uat' | 'prod' | 'stg';
//     /** web站点域名 */
//     Domain: string;
//     /** 接口域名 */
//     ApiDomain: string;
//     /** KC域名 */
//     KcDomain: string;
//     /** ios code-push key */
//     IosCodePushDeploymentKey: string;
//     /** android code-push key */
//     AndroidCodePushDeploymentKey: string;
//     /** 小程序容器ios sdk key */
//     IosFinClipSdkKey: string /** 小程序容器sdk key */;
//     /** 小程序容器 ios sdk secret */
//     IosFinClipSdkSecret: string /** 小程序容器 sdk secret */;
//     /** 小程序容器android sdk key */
//     AndroidFinClipSdkKey: string;
//     /** 小程序容器 android sdk secret */
//     AndroidFinClipSdkSecret: string;
//     /** 小程序容器服务端域名 */
//     FinClipApiServer: string;
//     /** 高德地图IOS apiKey */
//     AmapIosSdkKey: string;
//     /** 高德地图Android apiKey */
//     AmapAndroidSdkKey: string;
//   }
//   /**
//    * 环境配置
//    * @type from .env
//    * @exports .env
//    */
//   export const Config: NativeConfig;
//   export default Config;
// }

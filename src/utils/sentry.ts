import { Sentry } from 'react-native-sentry';
import CodePush from 'react-native-code-push';
import config from 'config';

if (!__DEV__ && config.SENTRY_DSN) {

  // Install sentry
  Sentry.config(config.SENTRY_DSN).install();

  // Set Sentry CodePush metadata
  CodePush.getUpdateMetadata()
    .then((update) => {
      if (update) {
        Sentry.setVersion(`${update.appVersion}-codepush:${update.label}`);
      }
    });
}

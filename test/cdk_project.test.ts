import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkProject from '../lib/cdk_project-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkProject.CdkProjectStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

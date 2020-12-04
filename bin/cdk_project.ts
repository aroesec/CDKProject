#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkProjectStack } from '../lib/cdk_project-stack';

const app = new cdk.App();
new CdkProjectStack(app, 'CdkProjectStack');

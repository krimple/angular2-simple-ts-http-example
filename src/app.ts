import {Component} from 'angular2/core';
import {AppShell} from './app-shell/app-shell';
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

bootstrap(AppShell, [HTTP_PROVIDERS]);

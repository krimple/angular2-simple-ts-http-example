import {Injectable} from 'angular2/core';

import * as marked from "marked";

// todo - use module form of Markdown Converter library

@Injectable()
export class MarkdownService {
    // markdown object is not typescript

    toHtml(text: string) {
        return marked.parse(text);
    }
}
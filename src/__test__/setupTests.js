/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import jsdom from "jsdom";

const doc = new jsdom.JSDOM("<!doctype html><html><body></body></html>");

global.document = doc;
global.window = doc.defaultView;
global.fetch = fetch;
global.setImmediate = (func) => setTimeout(func, 0);

Enzyme.configure({
  adapter: new Adapter(),
});

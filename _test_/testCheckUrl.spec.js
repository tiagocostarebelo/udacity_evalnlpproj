import {checkUrl} from '../src/client/js/checkUrl'

describe("Testing to make sure input is url",()=>{
    test("Testing the checkUrl() function", ()=>{
    expect(checkUrl("wwww.google.com")).toBe(false);
    })
})
        
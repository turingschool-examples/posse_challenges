var ObstacleCourse = require('./obstacleCourse');

describe('ObstacleCourse()', function()  {

  it('isString()', function() {
    var oc = new ObstacleCourse();

    expect(oc.isString("Hello World")).toEqual(true);
    expect(oc.isString("")).toEqual(true);

    expect(oc.isString(["Hello World"])).toEqual(false);
    expect(oc.isString({string: "Hello World"})).toEqual(false);
  });

  it('includes()', function() {
    var oc = new ObstacleCourse();

    expect(oc.includes("Hello World", "He")).toEqual(true);
    expect(oc.includes("Hello World", " W")).toEqual(true);

    expect(oc.includes("Hello World", "he")).toEqual(false);
    expect(oc.includes("Hello World", "za")).toEqual(false);

    expect(oc.includes("Pizza", "za")).toEqual(true);
    expect(oc.includes("Pizza", "z")).toEqual(true);

    expect(oc.includes("Pizza", "ZA")).toEqual(false);
    expect(oc.includes("Pizza", "he")).toEqual(false);
  });

  it('center()', function() {
    var oc = new ObstacleCourse();

    expect(oc.center("Hello World", 1)).toEqual(" Hello World ");
    expect(oc.center("Hello World", 3)).toEqual("   Hello World   ");

    expect(oc.center("Hello World", 1, "%")).toEqual("%Hello World%");
    expect(oc.center("Hello World", 3, "%")).toEqual("%%%Hello World%%%");
  });

  it('leftPad()', function() {
    var oc = new ObstacleCourse();

    expect(oc.leftPad("Hello World", 14)).toEqual("   Hello World");
    expect(oc.leftPad("Hello World", 20)).toEqual("         Hello World");

    expect(oc.leftPad("Hello World", 14, "$")).toEqual("$$$Hello World");
    expect(oc.leftPad("Hello World", 20, "$")).toEqual("$$$$$$$$$Hello World");
  });

  it('rightPad()', function() {
    var oc = new ObstacleCourse();

    expect(oc.rightPad("Hello World", 14)).toEqual("Hello World   ");
    expect(oc.rightPad("Hello World", 20)).toEqual("Hello World         ");

    expect(oc.rightPad("Hello World", 14, "$")).toEqual("Hello World$$$");
    expect(oc.rightPad("Hello World", 20, "$")).toEqual("Hello World$$$$$$$$$");
  });

  it('squeeze()', function() {
    var oc = new ObstacleCourse();

    expect(oc.squeeze("Hello All")).toEqual("Helo Al");
    expect(oc.squeeze("Football")).toEqual("Fotbal");
    expect(oc.squeeze("ppaall")).toEqual("pal");
    expect(oc.squeeze("ppaall  ")).toEqual("pal ");
  });

  it('startWith()', function() {
    var oc = new ObstacleCourse();
    expect(oc.startWith("Hello World", "H")).toEqual(true);
    expect(oc.startWith("Hello World", "h")).toEqual(false);

    expect(oc.startWith(" World", "W")).toEqual(true);
    expect(oc.startWith("World", "Wo")).toEqual(true);
    expect(oc.startWith("World", "Wot")).toEqual(false);
  });
});
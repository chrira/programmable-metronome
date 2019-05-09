import {Metronom} from '../../src/metronom';

describe("Metronom", function() {

  var metronom;

  beforeEach(function() {
    metronom = new Metronom();
  });
  

  it("and so is a spec", function() {
    var a = true;

    expect(a).toBe(true);
  });

  it("get name", function() {
    var name = metronom.getName();

    expect(name).toBe('Metronom');
  });
});

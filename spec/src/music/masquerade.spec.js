describe("Masquerade", function() {

	var Masquerade = require('../../../src/music/masquerade');
	var masquerade;

	beforeEach(function() {
		masquerade = new Masquerade();
	});

	it("should have right name", function() {
		expect(masquerade.getName()).toBe('Masquerade');
	});

	it("should have right amount of parts", function() {
		expect(masquerade.getParts()).toBe(3);
	});

	describe("Satz 1", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = masquerade.getPart(1)
			origBarsSatz = origBarsSatz1;
		});

		it("should have right amount of bars", function() {
			expect(barsSatz.length).toBe(66);
		});

		it("bar 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(4);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('bar ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('bar ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
				}         
			}
		});
	});

	describe("Satz 2", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = masquerade.getPart(2)
			origBarsSatz = origBarsSatz2;
		});

		it("should have right amount of bars", function() {
			expect(barsSatz.length).toBe(75);
		});

		it("bar 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(3);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('bar ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('bar ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
				}         
			}
		});
	});

	describe("Satz 3", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = masquerade.getPart(3)
			origBarsSatz = origBarsSatz3;
		});

		it("should have right amount of bars", function() {
			expect(barsSatz.length).toBe(215);
		});

		it("bar 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(4);
		});

		it("bar 6 should have right amount of beats", function() {
			expect(barsSatz[5].length).toBe(3);
		});

		it("bar 16 should have right amount of beats", function() {
			expect(barsSatz[15].length).toBe(1);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('bar ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('bar ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
				}         
			}
		});
	});
});

const origBarsSatz1 = [
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2],
	[2, 2, 2, 2]
];

const origBarsSatz2 = [
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2],
	[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2]
];

const origBarsSatz3 = [
	[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 3], [2, 2, 3], [2, 2, 3],
	[2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3],
	[2, 2, 2, 3], [3, 3, 2], [3, 3, 2], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3, 3],
	[3], [3], [3], [3], [3],
	[3], [2, 2, 3], [2, 2, 3], [2, 2, 3], [3, 3, 2],
	[2, 2, 3], [2, 2, 3], [2, 2, 3], [3, 3, 2], [2, 2, 3],
	[2, 2, 3], [3, 3, 3], [3, 3, 3], [2, 2, 3], [2, 2, 2, 3],
	[2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 2, 3], [3],
	[3], [3], [3], [2, 2, 3], [2, 2, 3],
	[2, 2, 3, 3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3, 2], [3, 2], [3, 2], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3],
	[2, 2, 3], [2, 2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3],
	[2, 2, 2, 3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[3], [3], [3], [3], [3],
	[2, 2, 3], [3], [3], [3], [3]
];

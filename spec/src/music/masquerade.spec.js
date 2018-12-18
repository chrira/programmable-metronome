describe("Masquerade", function() {

	var Masquerade = require('../../../src/music/masquerade');

	describe("Satz 1", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = Masquerade.barsSatz1()
			origBarsSatz = origBarsSatz1;
		});

		it("should have right amount of measures", function() {
			expect(barsSatz.length).toBe(66);
		});

		it("measure 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(4);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('measure ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('measure ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
				}         
			}
		});
	});

	describe("Satz 2", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = Masquerade.barsSatz2()
			origBarsSatz = origBarsSatz2;
		});

		it("should have right amount of measures", function() {
			expect(barsSatz.length).toBe(75);
		});

		it("measure 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(3);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('measure ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('measure ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
				}         
			}
		});
	});

	describe("Satz 3", function() {
		var barsSatz;
		var origBarsSatz;

		beforeEach(function() {
			barsSatz = Masquerade.barsSatz3()
			origBarsSatz = origBarsSatz3;
		});

		it("should have right amount of measures", function() {
			expect(barsSatz.length).toBe(215);
		});

		it("measure 1 should have right amount of beats", function() {
			expect(barsSatz[0].length).toBe(4);
		});

		it("measure 6 should have right amount of beats", function() {
			expect(barsSatz[5].length).toBe(3);
		});

		it("measure 16 should have right amount of beats", function() {
			expect(barsSatz[15].length).toBe(1);
		});

		it("compare whole satz", function() {
			const size = origBarsSatz.length;

			for (var i = 0; i < size; i++) {
				if (origBarsSatz[i].length != barsSatz[i].length) {
					fail('measure ' + i + ' length is not right, orig: ' + origBarsSatz[i].length + ' actual: ' + barsSatz[i.length]);
				}
				if (origBarsSatz[i].toString() !== barsSatz[i].toString()) {
					fail('measure ' + i + ' is not right, orig: ' + origBarsSatz[i] + ' actual: ' + barsSatz[i]);
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

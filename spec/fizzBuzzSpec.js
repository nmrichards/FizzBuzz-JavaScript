describe("FizzBuzz", function() {
  var number;

  beforeEach(function() {
    number = new FizzBuzz();
  });


  it ("should display 'Fizz' instead of 3", function() {
    expect(number.fizzBuzz(3)).toEqual("Fizz");
  });

  it("should display 'Buzz' instead of 5", function() {
    expect(number.fizzBuzz(5)).toEqual("Buzz");
  });

  it("should display 'FizzBuzz' instead of 15", function() {
    expect(number.fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it ("should display 'Fizz' instead of 6", function() {
    expect(number.fizzBuzz(6)).toEqual("Fizz");
  });

  it("should display 'Buzz' instead of 10", function() {
    expect(number.fizzBuzz(10)).toEqual("Buzz");
  });

  it("should display 'FizzBuzz' instead of 30", function() {
    expect(number.fizzBuzz(30)).toEqual("FizzBuzz");
  });

  it("should display the number if not 3 or 5 or multiple of 3,5", function() {
    expect(number.fizzBuzz(28)).toEqual(28);
  });

  });

// Describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

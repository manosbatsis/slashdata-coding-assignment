var PrimeUtils = {
  /**
   * Determine if the given number is a prime using simple trial division
   * @param n the number to check
   * @return {boolean} true if the number is a prime, false otherwise
   */
  isPrime: function (n) {
    // One easily seen thing is that no prime other than 2 is even,
    // so we need only check odd numbers after we have taken care of 2.
    // That doesn't make much of a difference, though, since the even
    // numbers are the cheapest to find composite - and the bulk of
    // time is still spent verifying the primality of primes. However,
    // if we look at the even numbers as candidate divisors, we see that
    // if n is divisible by an even number, n itself must be even, so
    // (excepting 2) it will have been recognised as composite before
    // division by any even number greater than 2 is attempted. So all
    // divisions by even numbers greater than 2 that occur in the
    // algorithm must necessarily leave a nonzero remainder. We can thus
    // omit these divisions and check for divisibility only by 2 and
    // the odd numbers from 3 to √n. This halves (not quite exactly)
    // the number of divisions required to determine a number as prime
    // or composite and therefore the running time.
    //
    // Another large family of numbers is the multiples of 3. Every third
    // division we perform is by a multiple of 3, but if n is divisible
    // by one of them, it is also divisible by 3, and hence no division
    // by 9, 15, 21, ... that we perform in our algorithm will ever leave
    // a remainder of 0. So, how can we skip these divisions? Well, the
    // numbers divisible by neither 2 nor 3 are precisely the numbers of
    // the form 6*k ± 1. Starting from 5 (since we're only interested in
    // numbers greater than 1), they are 5, 7, 11, 13, 17, 19, ..., the
    // step from one to the next alternates between 2 and 4, which is easy
    // enough,
    // Not implemented: If we continue this route, the next step is the
    // elimination of multiples of 5 and so on.
    if (n % 2 == 0) return n == 2;
    if (n % 3 == 0) return n == 3;
    var step = 4, m = Math.sqrt(n) + 1;
    for (var i = 5; i < m; step = 6 - step, i += step) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  },
  /**
   * Get the Nth prime number
   * @param n the N index
   * @return {number} the Nth prime number
   */
  nthPrime: function (n) {
    var candidate, count;
    for (candidate = 2, count = 0; count < n; ++candidate) {
      if (this.isPrime(candidate)) {
        ++count;
      }
    }
    // The candidate has been incremented once after the count reached n
    return --candidate;
  }
}
export default PrimeUtils;

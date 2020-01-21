# This problem is from a job application.

# Given a string representing a Roman numeral, write a function to compute
# the Arabic numerical equivalent. For example `roman_to_arabic("MDCCLXXVI")`
# should return `1776`.


def roman_to_arabic(s):
    """Should convert roman numerals to arabic numerical equivalent.

    >>> roman_to_arabic("MDCCLXXVI")
    1776
    >>> roman_to_arabic("CDXLIV")
    444
    >>> roman_to_arabic("MMMCXX")
    3120
    """

    roman_nums = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    arabic_vals = []
    i = 0
    while i < len(s):
        first_num = s[i]
        if i == len(s) - 1:
            arabic_vals.append(roman_nums[first_num])
            break
        second_num = s[i+1]
        if roman_nums[first_num] < roman_nums[second_num]:
            arabic_vals.append(roman_nums[second_num] - roman_nums[first_num])
            i += 1
        else:
            arabic_vals.append(roman_nums[first_num])
        i += 1
    return _sum_up_arabic(arabic_vals)


def _sum_up_arabic(lst):
    """Sums up all the numbers in a list."""
    sum = 0
    for n in lst:
        sum += n
    return sum

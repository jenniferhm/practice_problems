# This is a problem from a job application.

# Write a generic function to compute various scenarios for the following
# optimization problem: A farmer owns X acres of land. She profits P1 dollars
# per acre of corn and P2 dollars per acre of oats. Her team has Y hours of
# labor available. The corn takes H1 hours of labor per acre and oats require
# H2 hours of labor per acre. How many acres of each can be planted to
# maximize profits?

# Test the function for the following cases:
# a) X = 240, Y = 320, P1 = $40, P2 = $30, H1 = 2, H2 = 1
# b) X = 300, Y = 380, P1 = $70, P2 = $45, H1 = 3, H2 = 1
# c) X = 180, Y = 420, P1 = $65, P2 = $55, H1 = 3, H2 = 2


def max_profit(acres, labor, corn_unit_profit, oats_unit_profit, corn_labor, oats_labor):
    """Should return the maximum profit a farmer can get given X acres of corn and oats and Y hours of labor available.

    >>> max_profit(240, 320, 40, 30, 2, 1)
    80 acres of corn and 160 acres of oats should be planted to yield maximum profit of $8,000
    >>> max_profit(300, 380, 70, 45, 3, 1)
    40 acres of corn and 260 acres of oats should be planted to yield maximum profit of $14,500
    >>> max_profit(180, 420, 65, 55, 3, 2)
    60 acres of corn and 120 acres of oats should be planted to yield maximum profit of $10,500
    """

    corn = int((labor - oats_labor * acres) / (corn_labor - oats_labor))
    oats = int(acres - corn)
    corn_profit = corn * corn_unit_profit
    oats_profit = oats * oats_unit_profit
    max_profit = corn_profit + oats_profit

    print(f"{corn} acres of corn and {oats} acres of oats should be planted to yield maximum profit of $" + "{:,}".format(max_profit))

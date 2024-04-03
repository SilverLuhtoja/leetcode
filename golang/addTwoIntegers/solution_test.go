package addTwoIntegers

import (
	"fmt"
	"testing"
)

func TestAddNewIntegers(t *testing.T) {
	test := []struct {
		num1     int
		num2     int
		expected int
	}{
		{1, 2, 3},
		{-1, 2, 1},
		{0, 0, 0},
		{5, -5, 0},
		{10, 20, 30},
	}

	fmt.Println(" OK")
	for _, test := range test {
		result := addTwoIntegers(test.num1, test.num2)
		if result != test.expected {
			t.Errorf("For %d + %d, expected %d, but got %d", test.num1, test.num2, test.expected, result)
		}
	}
}

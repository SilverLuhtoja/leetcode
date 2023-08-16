class Solution {
  void merge(List<int> nums1, int m, List<int> nums2, int n) {
    int p1 = 0;
    int p2 = 0;
    while (p2 < n) {
      if (p1 == m || nums2[p2] <= nums1[p1]) {
        nums1.insert(p1, nums2[p2]);
        p1++;
        p2++;
        m++;
      } else {
        p1++;
      }
    }

    print(nums1);
  }
}

void main(List<String> args) {
  Solution sol = Solution();
  sol.merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
}

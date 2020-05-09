#include <stdlib.h>
#include <vector>
#include <stdio.h>


std::vector<int> contiguous_sum(std::vector<int>& input) {
    int current_sum = 0;

    int max_up = 0;
    int end_up = 0;

    for(int i = 0; i < int(input.size()); i++) {
        current_sum += input[i];
        if(current_sum > max_up) {
            max_up = current_sum;
            end_up = i;
        }
    }
    
    int max_down = 0;
    int end_down = 0;
    current_sum = 0;
    for(int i = int(input.size()) - 1; i >= 0 ; i--) {
        current_sum += input[i];
        if(current_sum > max_down) {
            max_down = current_sum;
            end_down = i;
        }
    }
    printf("end_up = %d\n", end_up);
    printf("end_down = %d\n", end_down);
    std::vector<int> result(input.begin() + end_down, input.begin() + end_up + 1);
    return result;
}

int main(int argc, char* argv[]) {
    std::vector<int> my_array = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    std::vector<int> sum_arr = contiguous_sum(my_array);

    for(int i = 0; i < int(sum_arr.size()); i++) {
        printf("%d\n", sum_arr[i]);
    }   
}   

let m = process.argv[2];
let n = process.argv[3];
let start = [1, 1];
let end =   [m, n];

// rules: can only move in positive i and j
function find_paths(current_pos, end, paths) {
    if(current_pos[0] === end[0] && current_pos[1] === end[1]) {
        paths.n_paths++;
    }
    if (current_pos[0] < end[0]) {
        find_paths([current_pos[0] + 1, current_pos[1]], end, paths);
    }
    if (current_pos[1] < end[1]) {
        find_paths([current_pos[0], current_pos[1] + 1], end, paths);
    }
}
function num_paths(start, end) {
    let paths = {n_paths: 0};
    find_paths(start, end, paths);
    return paths.n_paths;
}
console.log("n_paths = " + num_paths(start, end));
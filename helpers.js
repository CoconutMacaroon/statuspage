exports.readTemplateFile = function (path, encoding, view) {
    return require("mustache").render(
        require("fs").readFileSync(path, encoding),
        view
    );
};

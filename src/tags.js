function tagsCount()
{
    const elements = document.getElementsByTagName("*");
    const tags = [];

    for (let it of elements) {
        tags.push(it.tagName)
    }

    let counts = {}
    tags.forEach(function(x) { if (counts[x]) {
        counts[x]++;
    }else {
        counts[x] = 1;
    }})
    console.log(counts)
}

tagsCount()
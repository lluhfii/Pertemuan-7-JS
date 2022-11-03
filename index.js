let hewan = [
    'Gajah', 
    'Ikan', 
    'Harimau']

    hewan.push(Gagak)
    hewan.splice(2,1, 'Kucing')
    hewan.shift

    for (h of hewan) {
    console.log(h)
    }
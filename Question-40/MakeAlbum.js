make_album("The weeknd", "starboy")
make_album("Billie Elish", "lovely")
make_album("Atif Aslam", "dil diyan gallan", 8)

function make_album(name, title, tracks = 0) {
    var obj = {
        artist_name: name,
        title: title,
        tracks: tracks
    }
    console.log(obj)
}
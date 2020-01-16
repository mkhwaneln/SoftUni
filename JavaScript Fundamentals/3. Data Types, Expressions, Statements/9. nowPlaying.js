/**
 * Write a JS function that displays information about the currently playing musical track.
 * The input comes as an array of string elements.
 * The first element is the name of the track, the second is the name of the artist performing 
 *  and the third is the duration in minutes and seconds.
 * The output should be printed to the console in the following format:
 *  Now Playing: {artist name} - {track name} [{duration}]
 * 
 * Input: ['Number One', 'Nelly', '4:09']
 * Output: Now Playing: Nelly – Number One [4:09]
 */

console.log("9. Now Playing");

function nowPlaying(information)
{
    console.log("Now Playing: " + information[1] + " - " + information[0] + " [" + information[2] + "]");
}

nowPlaying(['Number One', 'Nelly', '4:09']);
nowPlaying(['Thunder/Young, Dumb & Broke', 'Imagine Dragons & Khalid', '4:10']);
nowPlaying(['Insimbi', 'Mthunzi & Sun-El Musician', '4:37']);
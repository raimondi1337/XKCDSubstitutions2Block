export default (request) => {
    var words;
    var leadingCapitals = [];
    var trailingPeriods = [];

    deconstructString();
    translateString();
    reconstructString();

    request.message.text = words;
    return request.ok(); // Return a promise when you're done 

    //function
    function deconstructString() {
        //split
        words = request.message.text.split(' ');

        for (var i = 0, len = words.length; i < len; i++) {
            //mark capitals
            if (words[i].charAt(0) == words[i].charAt(0).toUpperCase()) {
                leadingCapitals.push(1);
                //strip capitals
                words[i] = words[i].toLowerCase();
            } else {
                leadingCapitals.push(0);
            }

            //mark periods
            if (words[i].charAt(words[i].length - 1) == '.') {
                trailingPeriods.push(1);
                //strip periods
                words[i] = words[i].slice(0, -1);
            } else {
                trailingPeriods.push(0);
            }
        }
    }

    function translateString() {
        //replace words
        for (var i = 0, len = words.length; i < len; i++) {
            switch (words[i]) {
                case 'debate':
                    words[i] = 'dance-off';
                    break;
                case 'self':
                    if (words[i + 1] == 'driving') {
                        words[i] = 'uncontrollably';
                        words[i + 1] = 'swerving';
                    }
                    break;
                case 'poll':
                    words[i] = 'psychic reading';
                    break;
                case 'candidate':
                    words[i] = 'airbender';
                    break;
                case 'drone':
                    words[i] = 'dog';
                    break;
                case 'vows':
                    if (words[i + 1] == 'to') {
                        words[i] = 'probably';
                        words[i + 1] = 'won\'t'
                    }
                    break;
                case 'at large':
                    words[i] = 'very large';
                    break;
                case 'successfully':
                    words[i] = 'suddenly';
                    break;
                case 'expands':
                    words[i] = 'physically expands';
                    break;
                case 'first-degree':
                case 'second-degree':
                case 'third-degree':
                    words[i] = 'friggin\' awful';
                    break;
                case 'an':
                    if (words[i + 1] == 'unknown' && words[i + 2] == 'number') {
                        words[i] = 'like';
                        words[i + 1] = '';
                        words[i + 2] = 'hundreds';
                    }
                    break;
                case 'front':
                    if (words[i + 1] == 'runner') {
                        words[i] = 'blade';
                        words[i + 1] = 'runner';
                    }
                    break;
                case 'global':
                    words[i] = 'spherical';
                    break;
                case 'years':
                    words[i] = 'minutes';
                    break;
                case 'minutes':
                    words[i] = 'years';
                    break;
                case 'no':
                    if (words[i + 1] == 'indication') {
                        words[i] = 'lots';
                        words[i + 1] = 'of signs';
                    }
                    break;
                case 'urged':
                    if (words[i + 1] == 'restraint' && words[i + 2] == 'by') {
                        words[i] = 'drunkenly';
                        words[i + 1] = 'egged';
                        words[i + 2] = 'on';
                    }
                    break;
                case 'horsepower':
                    words[i] = 'tons of horsemeat';
                    break;
                default:
                    break;
            }
        }
    }

    function reconstructString(str) {
        for (var i = 0, len = words.length; i < len; i++) {
            //replace capitals
            if (leadingCapitals[i]) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
            }
            //replace periods

            if (trailingPeriods[i]) {
                words[i] = words[i] + '.';
            }
        }

        //join
        words = request.message.text = words.join(' ');

    }
}

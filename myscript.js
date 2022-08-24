function working() {
    console.log('working!')
}

function load(url, element) {

    fetch(url).then(res => {
        element.innerHTML = res; 
    });
}

// home page / loading screen
const homepage = document.querySelector('.home')
const playbutton = document.querySelector('.home button');
playbutton.addEventListener('click', function() {
    homepage.style.height = '0'
    homepage.style.overflow = 'hidden'
})


if (sessionStorage.getItem('reload') == 'true') {
    homepage.style.height = '0'
    homepage.style.overflow = 'hidden'
    homepage.style.transition = 'none'
    // console.log('t')
}
else {
    // console.log('f')
    // console.log(sessionStorage.getItem('reload'))
}


//const words = ['hello', 'my', 'true', 'sign', 'sample']

// Got words from https://relatedwords.org/relatedto/nursing with BS4 and Selenium
const words = ['physician', 'hospital', 'midwife', 'suck', 'woman', 'doctor', 'pediatrician', 'surgeon', 'medical', 'psychiatrist', 'obstetrician', 'patient', 'veterinarian', 'clinic', 'gynecologist', 'nanny', 'matron', 'treat', 'medicine', 'care', 'pediatric', 'suckle', 'harbor', 'entertain', 'hold', 'lactate', 'nursemaid', 'harbour', 'oncologist', 'neurologist', 'breastfeed', 'internist', 'caregiver', 'lpn', 'medic', 'clinician', 'pediatrics', 'dentist', 'midwifery', 'therapist', 'counselor', 'teacher', 'mother', 'paramedic', 'worker', 'schoolteacher', 'housekeeper', 'waitress', 'pharmacist', 'anesthetist', 'receptionist', 'technician', 'maternity', 'psychotherapist', 'anesthesiologist', 'nuns', 'monks', 'christian', 'islamic', 'buddhist', 'phoebe', 'ethos', 'reformation', 'experience', 'feel', 'give', 'rn', 'probationer', 'feed', 'sanger', 'nightingale', 'amah', 'pcp', 'mammy', 'cavell', 'handle', 'keeper', 'protestant', 'profession', 'medico', 
'gp', 'dermatologist', 'doctoral', 'medication', 'md', 'manson', 'hodgkin', 'cardiologist', 'dr', 'pathologist', 'sanatorium', 'harvey', 'apc', 'veterinary', 
'paregoric', 'anticoagulant', 'wetnurse', 'accoucheuse', 'healer', 'radiotherapy', 'schweitzer', 'avicenna', 'syringe', 'curative', 'therapy', 'remedy', 'oncology', 'teaching', 'inpatient', 'doc', 'antihistamine', 'therapeutic', 'biomedicine', 'ross', 'nostrum', 'clinical', 'prescriber', 'outpatient', 'palliative', 'panacea', 'anticholinergic', 'nurses', 'placebo', 'gynecology', 'pregnant', 'nursing', 'allergist', 'child', 'gastroenterologist', 'antidoctor', 'medician', 'iatro', 'nephrologist', 'doctorish', 'doctorial', 'nondoctor', 'doctorishness', 'parents', 'nonmedical', 'leechcraft', 'pseudomedical', 'geriatrician', 'neuropsychologist', 'virologist', 'license', 'aesculapian', 'multidoctor', 'sick', 'medicate', 'venesect', 'noninvasive', 'mercurialist', 'traumatology', 'czechoslovakia', 'medicative', 'nonprescription', 'firefighter', 'neuropsychiatry', 'clonic', 'immunosuppressant', 'ethnomedicine', 'neurotropic', 'girl', 'premedical', 'toddler', 'doctors', 'caring', 'children', 'hospitalize', 'azathioprine', 'sucralfate', 'antiarrhythmic', 'clofibrate', 'amrinone', 'premedication', 'mfm', 'anticholinesterase', 'vermifuge', 'boy', 'physostigmine', 'elderly', 'physicker', 'potentiation', 'resident', 'isosorbide', 'decongestant', 'antipyretic', 'probenecid', 'disulfiram', 'isoproterenol', 'urinalysis', 'counterirritant', 'nosocomial', 'mothers', 'vermicide', 'newborn', 'expectorant', 'parenteral', 
'psychologist', 'antiemetic', 'gemfibrozil', 'iatrophysics', 'tiamulin', 'psychomedicine', 'antidiuretic', 'proctology', 'pentylenetetrazol', 'carminative', 'counseling', 'polychrest', 'abortionist', 'proctologist', 'pharmaceutic', 'acyclovir', 'medicament', 'allopurinol', 'daughter', 'wife', 'antiprotozoal', 'succedaneum', 'nanomedicine', 'antihypertensive', 'abortifacient', 'she', 'achromia', 'antitussive', 'antispasmodic', 'sister', 'antidiabetic', 'psychiatric', 'grandmother', 'suppository', 'pharmacon', 'antidiarrheal', 'podiatry', 'hematinic', 'girlfriend', 'instructor', 'her', 'colleague', 'treated', 'ill', 'paradigm', 'patients', 'paramedics', 'daughters', 'trainee', 'accountant', 'trained', 'maid', 'young', 'counselors', 'husband', 'employee', 'infant', 'baby', 'girls', 
'terminally', 'ambulance', 'sisters', 'volunteer', 'volunteered', 'physicians', 'friend', 'enlisted', 'hospice', 'boyfriend', 'mom', 'orphanage', 'female', 'dying', 'widowed', 'quebec', 'surgery', 'anesthetists', 'worldview', 'lawyer', 'death', 'telenursing', 'disease', 'distress', 'australia', 'bursary', 'preceptor', 'houseman', 'practitioner', 'locum', 'radiologist', 'carer', 'obstetrics', 'policewoman', 'adon', 'stewardess', 'hairdresser', 'physiotherapist', 'corpsman', 'chaplain', 'bedside', 'homemaker', 'librarian', 'education', 'yukon', 'bottlefeed', 'phlebotomist', 'radiographer', 'dietician', 'beautician', 'cosmetologist', 'hygienist', 'aromatherapist', 'dietitian', 'reflexologist', 'manicurist', 'vaccinator', 'haematologist', 'bedpan', 'cosmetician', 'esthetician', 'caseworker', 'electrologist', 'chiropodist', 'paraprofessional', 'cuddler', 'paediatrician', 'cannulation', 'venipuncture', 'anatomy', 'physiology', 'microbiology', 'nutrition', 'chemistry', 'class', 'germans', 'demand', 'psychiatry', 'minnesota', 'italians', 'czechs', 'learning', 'geriatrics']


const word = words[Math.floor(Math.random() * words.length)]
var done = false
// console.log(word)

let attempts = 0;


function getGuess() {
     // get last row of .items a.k.a the last guess/word
     var row = document.querySelector('.item:last-child');

     // get the child elements of the last guess/word a.k.a. the letters
     var children = row.childNodes;
     var children = [...children];
 
     let guess = '';
 
     // loop through the letters 
     for (i=0; i<word.length; i++) {
 
         // if there is no letter in place (meaning an incomplete guess word), 
         // make popup visible
         if (children[i].innerHTML == "") {
            guess += '_';
         }
 
         else {
            // increment the letter to the quess word
             guess += children[i].innerHTML;
         }
     }

     return guess.toLowerCase();

}


// make the keypad

let row1 = 'QWERTYUIOP'
let row2 = 'ASDFGHJKL'
let row3 = 'ZXCVBNM'
let rows = [row1, row2, row3]

for (i=0; i < rows.length; i++) {
    var keypad = document.querySelector('.keypad');
    let row = document.createElement('div')
    row.className = 'row'

    for (j=0; j < rows[i].length; j++) {
        let letter = document.createElement('div');
        letter.className = 'letter';
        letter.innerHTML = rows[i][j]

        // add functionality for each letter in keypad
        letter.addEventListener('click', function() {
            //let x = document.querySelector('.word');
            //x.innerHTML += letter.innerHTML;

            var item = document.querySelector('.item:last-child');
            var children = item.childNodes;
            var children = [...children]

            for (i=0; i<children.length; i++) {

                if (children[i].innerHTML == "") {
                    children[i].innerHTML = letter.innerHTML;
                    //children[i].style.outlineOffset = '-3px';
                    children[i].style.outline = '3px solid black'
                    break
                }
            }
        })

        row.append(letter) 
    }

    keypad.append(row)
}


// submit button
var lastrow = document.querySelector('.row:last-child')
var submit = document.createElement('button')
submit.className = 'insert'
submit.innerHTML = 'Enter'
lastrow.append(submit)


// delete button
var deleteButton = document.createElement('button')
deleteButton.className = 'delete'
var backspace = document.createElement('img')
backspace.src = 'backspace.png'
deleteButton.appendChild(backspace)
lastrow.prepend(deleteButton)


function submitGuess() {
    // increment attempt count
    
    attempts += 1
    //console.log(attempts)

    // get the user's input / guess word
    let guessWord = getGuess();
    // console.log(guessWord)

    // check if the user has attempts left
    if (attempts <= 5) {
        // check if word is complete
        if (guessWord.includes('_')) {
            return
        }
        // check if the user's input/ guess word is equal to the chosen word
        else if (guessWord != word) {
            // if guess is incorrect, add another row and highlight the letters
            // of the latest guess according to its correctness(?) e.g. yellow, gray, or green
            // get last row of .items a.k.a the last guess/word
            var row = document.querySelector('.item:last-child');
            // get the child elements of the last guess/word a.k.a. the letters
            var children = row.childNodes;
            var children = [...children];
            let checked = []; // to get rid of repeating letters
            let lastChecked = {};
            // loop through the letters 
            for (i=0; i<word.length; i++) {
                
                var char = children[i];
                children[i].style.outline = 'none';
                // perform check
                if (guessWord[i] != word[i]) {
                    if (word.includes(guessWord[i])) {
                        if (checked.includes(guessWord[i])) {
                            //char.style.backgroundColor = 'gray';
                            char.classList.add('wrong')
                            char.style.color = 'white';
                            continue;
                        } else {
                            if (lastChecked[guessWord[i]]) {
                                lastChecked[guessWord[i]].push(i)
                            } else {
                                lastChecked[guessWord[i]] = [i];
                            }
                            //char.style.backgroundColor = 'yellow';
                            char.classList.add('in')
                            char.style.color = 'white';
                            checked.push(guessWord[i]);
                            continue;
                        }
                    } else {
                        //char.style.backgroundColor = 'gray';
                        char.classList.add('wrong')
                        char.style.color = 'white';
                        continue;
                    }
                } else {
                    //char.style.backgroundColor = 'green';
                    char.classList.add('right')
                    char.style.color = 'white';
                    checked.push(guessWord[i])
                    if (lastChecked[guessWord[i]]) {
                        for (j=0; j<lastChecked[guessWord[i]].length; j++) {
                            //children[j].style.backgroundColor = 'gray';
                            children[i].classList.add('wrong')
                            char.style.color = 'white';
                        }
                    }
                    continue
                }
            }
            if (attempts < 5) {
                let parentdiv = document.querySelector('.items');
                let item = document.createElement('div')
                item.className = 'item'
                for (i=0; i < word.length; i++) {
                    let letter = document.createElement('div');
                    letter.className = 'letter';
                    letter.innerHTML = '';
                    item.append(letter)
                }
                parentdiv.append(item);
            }        
        }
        else {
            // if answer is right,
            
            // get last row of .items a.k.a the last guess/word
            var row = document.querySelector('.item:last-child');
            // get the child elements of the last guess/word a.k.a. the letters
            var children = row.childNodes;
            var children = [...children];
            for (i=0; i<word.length; i++) {
                var letter = children[i]
                //letter.style.backgroundColor = 'green';
                letter.classList.add('right')
            }
            // show popup
            document.querySelector('.state').innerHTML = 'You Won!'
            document.querySelector('.correct-word').innerHTML = word
            document.querySelector('.correct-container').style.display = 'block'
            done = true

            sessionStorage.setItem("reload", true);
            console.log(`Correct! You got the correct answer on attempt ${attempts + 1}`)
        }
    }
        
    else {
        // show popup
        console.log('no more attempts left!')
    }
}


// insert div / submit functionality
const insert = document.querySelector('.insert');
insert.addEventListener('click', submitGuess)




// delete functionality 
const del = document.querySelector('.delete');

del.addEventListener('click', function() {
    let a = [...document.querySelectorAll('.item .letter')]
    // console.log(done)

    if (done == false) {
        if (attempts < 5) {
            for (i=a.length; i>-1; i--) {
                if (a[i] != undefined) {
                    if (a[i].innerHTML == "") {
                        continue
                    }
                    else {
                        a[i].innerHTML = "";
                        a[i].style.outline = 'none'
                        break;
                    }
                }
            }
        }
    } 
})


// create first item
let parentdiv = document.querySelector('.items');
let item = document.createElement('div')
item.className = 'item'
for (i=0; i < word.length; i++) {
    let letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = '';
    item.append(letter)
}
parentdiv.append(item);



// main page back button
const backbutton = document.querySelector('.back button')
backbutton.addEventListener('click', function() {
    //homepage.style.display = 'flex';
    homepage.style.transition = 'height .5s'
    homepage.style.height = '100vh'
})


// restart button
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function() {
    var containerMain = document.querySelector('.main');
    location.reload();
    homepage.style.display = 'none';
    
})


// close correct prompt
const correctContainer = document.querySelector('.correct-container')
const closeButton = document.querySelector('.correct-container .close')
closeButton.addEventListener('click', function() {
    correctContainer.style.display = 'none'
})


// keypress
document.addEventListener('keydown', check)

function check(e) {
    var keyCode = e.keyCode || e.which;
    var regex = /[A-Za-z]/;
    var w = String.fromCharCode(keyCode)
    var isValid = regex.test(String.fromCharCode(keyCode));

    if (keyCode == '8') {
        let a = [...document.querySelectorAll('.item .letter')]
        // console.log(done)

        if (done == false) {
            if (attempts < 5) {
                for (i=a.length; i>-1; i--) {
                    if (a[i] != undefined) {
                        if (a[i].innerHTML == "") {
                            continue
                        }
                        else {
                            a[i].innerHTML = "";
                            a[i].style.outline = 'none'
                            break;
                        }
                    }
                }
            }
        } 
    }

    else if (keyCode == '13') {
        submitGuess();
    }

    else if (isValid) {
        //console.log('valid')

        var item = document.querySelector('.item:last-child');
        var children = item.childNodes;
        var children = [...children]

        for (i=0; i<children.length; i++) {
            if (children[i].innerHTML == "") {
                children[i].innerHTML = w.toUpperCase();
                //children[i].style.outlineOffset = '-3px';
                children[i].style.outline = '3px solid black'
                break
            }
        }

    }

}

/*
function Validate(e) {
    var keyCode = e.keyCode || e.which;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";

    //Regex for Valid Characters i.e. Alphabets and Numbers.
    var regex = /^[A-Za-z0-9]+$/;

    //Validate TextBox value against the Regex.
    var isValid = regex.test(String.fromCharCode(keyCode));
    if (!isValid) {
        lblError.innerHTML = "Only Alphabets and Numbers allowed.";
    }

    return isValid;
}*/
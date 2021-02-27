


module.exports = function generateUniqueID (prefix = '', count) {
 //prefixi '' vahele kirjutatakse string, mis lisatakse tulemusele. 

    const id = count + 1;
 // fc loeb kõik kokku ja liidab 1

    console.log(count);
 // edastab konsooli loetud tellimuste arvu 

    console.log(`${prefix}${id}`);
        return `${prefix}${id}`;
 // annab konsooli prefix nime, millele on lisatud loetud tellimuste arv+1
}

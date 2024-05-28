let ListTache = {
  idIncrement: 1,
  taches: [],
};

const afficherListeTaches = () => {
  console.log("Voici la liste des tâches :");
  ListTache.taches.forEach((tache) => {
    tache.terminer
      ? console.log(
          `${tache.id} - ${tache.tache} - Terminé le ${tache.createdAt}`
        )
      : console.log(`${tache.id} - ${tache.tache} - A faire`);
  });
};

const ajouterTache = (prompt) => {
  console.log("Noter la tâche que vous souhaitez ajouter :");
  let tacheAjouter = prompt();
  const tache = {
    id: ListTache.idIncrement++,
    tache: tacheAjouter,
    createdAt: new Date(),
    terminer: false,
  };

  ListTache.taches.push(tache);

  console.log(`La tâche:  "${tache.tache}", a bien été ajoutée avec succès !`);
};

const marquerTerminer = (prompt) => {
  console.log("Quelle tâche voulez-vous marquer comme terminée ?");
  afficherListeTaches();
  let idTache = prompt("Entrez son numéro :");
  let tache = ListTache.taches.find((tache) => tache.id == idTache);
  if (tache) {
    tache.terminer = true;
    console.log(
      `La tâche "${tache.tache}" a bien été marquée comme terminée !`
    );
  } else {
    console.log("Tâche non trouvée");
  }
};

const editTache = (prompt) => {
  console.log("Quelle tâche voulez-vous éditer ?");
  afficherListeTaches();
  let idTache = prompt("Entrez son numéro :");
  let tache = ListTache.taches.find((tache) => tache.id == idTache);
  if (tache) {
    let tacheEdit = prompt("Entrez la nouvelle tâche :");
    tache.tache = tacheEdit;
    console.log(`La tâche "${tache.tache}" a bien été modifiée !`);
  } else {
    console.log("Tâche non trouvée");
  }
};

const supprimerTache = (prompt) => {
  console.log("Quelle tâche voulez-vous supprimer ?");
  afficherListeTaches();
  let idTache = prompt("Entrez son numéro :");
  let tache = ListTache.taches.find((tache) => tache.id == idTache);
  if (tache) {
    delete ListTache.taches[ListTache.taches.indexOf(tache)];
    console.log(`La tâche "${tache.tache}" a bien été supprimée !`);
  } else {
    console.log("Tâche non trouvée");
  }
};

export {
  ajouterTache,
  marquerTerminer,
  editTache,
  afficherListeTaches,
  supprimerTache,
};

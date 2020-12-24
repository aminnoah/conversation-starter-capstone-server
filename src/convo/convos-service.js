const ConvosService = {
  //relevant
  getConvos(db) {
      return db
          .select('*')
          .from('convos')
  },
  getConvosById(db, convos_id) {
      return db
          .select('*')
          .from('convos')
          .where('convos.id', convos_id)
          .first()
  },
//   getConvosByUserIdAndEventList(db, user_id, event_list) {
//     let eventListFieldName = `convos.ok_for_${event_list}`
//     console.log(eventListFieldName)
//     return db
//         .select('*')
//         .from('convos')
//         .where({
//             'convos.user_id': user_id,
//             'convos.ok_for_fashion': true
//         })
// },
getConvosByUserIdAndEventList(db, user_id, event_list) {
    let eventListFieldName = `convos.ok_for_${event_list}`
    console.log(eventListFieldName)
    return db
    .select('*')
            .from('convos')
            .where({
                'user_id': user_id,
                'ok_for_fashion': true
            })
    },
  //relevant
  insertConvos(db, newConvos) {
    //console.log(newConvos)
      return db
          .insert(newConvos)
          .into('convos')
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  updateConvos(db, convos_id, newConvos) {
      return db('convos')
          .update(newConvos, returning = true)
          .where({
              'id': convos_id
          })
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  deleteConvos(db, convos_id, user_id) {
    
    if (user_id !== 1 || user_id !== 2) {
      console.log('this user is not allowed to delete convos')
    }
    return db('convos')
          .delete()
          .where({
              'id': convos_id
          })
  }
}

module.exports = ConvosService
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
    if(event_list == 'fashion') {
      return db
            .select('*')
            .from('convos')
            .where({
              'is_public': true,
                'ok_for_fashion': true
            })
    }
    if(event_list == 'work') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_work': true
            })
    }
    if(event_list == 'entertainment') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_entertainment': true
            })
    }
    if(event_list == 'exercise') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_exercise': true
            })
    }
    if(event_list == 'travel') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_travel': true
            })
    }
    if(event_list == 'technology') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_technology': true
            })
    }
    if(event_list == 'holidays') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_holidays': true
            })
    }
    if(event_list == 'education') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_education': true
            })
    }
    if(event_list == 'food') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_food': true
            })
    }
    if(event_list == 'leisure') {
      return db
            .select('*')
            .from('convos')
            .where({
                'is_public': true,
                'ok_for_leisure': true
            })
    }
    if(is_public == false) {
      return db
        .select('*')
        .from('convos')
        .where({
          'is_public': false
        })
    }
    },
  //relevant
  insertConvos(db, newConvos) {
 
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
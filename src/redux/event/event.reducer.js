const events = [
  { id: 1,  
    name: "Festiwal biegów w Szczawnicy",
    from_date: "05.10.2019",
    to_date: "12.10.2019",
    races: [
      { 
        id: 1,    
        name: "Wielka Prehyba",
        start_date: "12.10",
        distance: 64,
        elevation_increase: 1800,
        elevation_decrease: 1800,
        food_points: 3,
        itra: 3,
        time_limit: 10.5
      },
      { 
        id: 2,    
        name: "Dziki Groń",
        start_date: "13.10",
        distance: 100,
        elevation_increase: 2800,
        elevation_decrease: 2800,
        food_points: 3,
        itra: 3,
        time_limit: 10.5
      }
    ]
  },
  {
    id: 2,  
    name: "VI Festiwal Biegu Rzeźnika",
    from_date: "06.06.2019",
    to_date: "12.06.2019",
    races: [
      { 
        id: 3,  
        name: "Rzeźnik",
        start_date: "12.10",
        distance: 64,
        elevation_increase: 1800,
        elevation_decrease: 1800,
        food_points: 3,
        itra: 3,
        time_limit: 10.5
      },
      {
        id: 4,    
        name: "Rżeżnik SKY",
        start_date: "13.10",
        distance: 100,
        elevation_increase: 2800,
        elevation_decrease: 2800,
        food_points: 3,
        itra: 3,
        time_limit: 10.5
      }
    ]
  }
];

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      return events;

    default:
      return state;
  }
};

export default eventReducer;

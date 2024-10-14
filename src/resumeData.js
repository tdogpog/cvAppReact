const resumeData = {
  userInfo: {
    userName: "Alan Smith",
    userEmail: "alan.smith@email.com",
    userPhone: "714-523-3523",
  },

  usereducation: [
    {
      educationName: "Generic University",
      educationStudied: "Generic Degree",
      educationGraduation: "May 2024",
      educationKey: crypto.randomUUID(),
    },

    {
      educationName: "Generic Highschool",
      educationStudied: "Generic Focus",
      educationGraduation: "May 2024",
      educationKey: crypto.randomUUID(),
    },
  ],

  userWork: [
    {
      workCompany: "Generic Company",
      workPosition: "Generic Position",
      workStart: "May 2024",
      workEnd: "May 2024",
      workDuties: [
        {
          workDutiesKey: crypto.randomUUID(),
          workDutiesDescription:
            "Generic informatino about litmus and chaptstick vitamins and other ingredients",
        },

        {
          workDutiesKey: crypto.randomUUID(),
          workDutiesDescription:
            "Generic informatino about litmus and chaptstick vitamins and other ingredients",
        },

        {
          workDutiesKey: crypto.randomUUID(),
          workDutiesDescription:
            "Generic informatino about litmus and chaptstick vitamins and other ingredients",
        },
      ],
    },
  ],
};

export default resumeData;

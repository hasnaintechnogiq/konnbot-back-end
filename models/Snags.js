const mongoose = require('mongoose');

const snagsSchema = mongoose.Schema({
    headingforshortingOne: {
        type: String,
        default: "NoneOfThere"
    },
    headingforshortingTwo: {
        type: String,
        default: "NoneOfThere"
    },
    headingforshortingThree: {
        type: String,
        default: "NoneOfThere"
    },
    headingforshortingFour: {
        type: String,
        default: "NoneOfThere"
    },
    headingforshortingFive: {
        type: String,
        default: "NoneOfThere"
    },
    NormalHeadingOne: {
        type: String,
        default: "NoneOfThere"
    },
    NormalHeadingTwo: {
        type: String,
        default: "NoneOfThere"
    },
    NormalHeadingThree: {
        type: String,
        default: "NoneOfThere"
    },
    NormalHeadingfoure: {
        type: String,
        default: "NoneOfThere"
    },
    maintitle: {
        type: String,
        default: "NoneOfThere"
    },
    subtitle: {
        type: String,
        default: "NoneOfThere"
    },
    YesForCountNoForCheck: {
        type: String,
        default: "No"
    },
    firstcheck: {
        type: String,
        default: "No"
    },
    secondcheck: {
        type: String,
        default: "No"
    },
    thirdcheck: {
        type: String,
        default: "No"
    },
    fourthcheck: {
        type: String,
        default: "No"
    },
    fifthcheck: {
        type: String,
        default: "No"
    },
    sixthcheck: {
        type: String,
        default: "No"
    },
    seventhcheck: {
        type: String,   
        default: "No"
    },
    eighthcheck: {
        type: String,
        default: "No"
    },
    ninthcheck: {
        type: String,
        default: "No"
    },    

    firstCount: {
        type: Number,
        default: 0
    },
    secondCount: {
        type: Number,
        default: 0
    },
    thirdCount: {
        type: Number,
        default: 0
    },

    InformationOneString: {
        type: String,
        default: "No"
    },
    InformationTwoString: {
        type: String,
        default: "No"
    },
    InformationThreeString: {
        type: String,
        default: "No"
    },
    InformationFourString: {
        type: String,
        default: "No"
    },
    InformationFiveString: {
        type: String,
        default: "No"
    },
    InformationSixString: {
        type: String,
        default: "No"
    },
    InformationSevenString: {
        type: String,
        default: "No"
    },
    InformationEightString: {
        type: String,
        default: "No"
    },
    InformationNineString: {
        type: String,
        default: "No"
    },
    InformationTenString: {
        type: String,
        default: "No"
    },
    InformationElevenString: {
        type: String,
        default: "No"
    },
    InformationTwelveString: {
        type: String,
        default: "No"
    },
    InformationThirteenString: {
        type: String,
        default: "No"
    },
    InformationFourteenString: {
        type: String,
        default: "No"
    },
    InformationFifteenString: {
        type: String,
        default: "No"
    },
    InformationSixteenString: {
        type: String,
        default: "No"
    },
    InformationSeventeenString: {
        type: String,
        default: "No"
    },
    InformationEighteenString: {
        type: String,
        default: "No"
    },
    InformationNineteenString: {
        type: String,
        default: "No"
    },
    
    InformationOneNumber: {
        type: Number,
        default: 0
    },
    InformationTwoNumber: {
        type: Number,
        default: 0
    },
    InformationThreeNumber: {
        type: Number,
        default: 0
    },
    InformationFourNumber: {
        type: Number,
        default: 0
    },
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("snags", snagsSchema);
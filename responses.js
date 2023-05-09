function getBotResponse(input) {
    // Gym Studio FaQ responses

    //membership payments questions and the responses
    if (input == "When will my first payment be taken?" || input == "when will my first payment be taken?") {
        return 'Your first payment is taken right away. ' +
        'Subsequent payments are taken on the same date each month thereafter.';
    } 
    else if (input == "What happens if one of my payments fails?" || input == "what happens if one of my payments fails?") {
        return 'If a payment fails, we attempt to recollect it again 10 days later. ' +
        'Please note, we do charge a £15 admin fee to do this. ' +
        'If the second attempt also fails, your membership is terminated.';
    } 
    else if (input == "How do I cancel my membership?" || input == "how do I cancel my membership?") {
        return 'You can cancel your membership by cancelling the direct debit with your bank. ' +
        'If you pay by recurring card payment, please contact us and provide your full name, ' +
        'postcode, the last 4 digits of your pin and reasoning for leaving.';
    }

    //general information
    else if (input == "What types of memberships do you offer?" || input == "what types of memberships do you offer?") {
        return 'To view what membership is available for your gym, please visit homepage and select the gym you are interested in joining.';
    }
    else if (input == "How old do I need to be to join?" || input == "how old do I need to be to join?") {
        return 'You need to be 16 to join The Gym Group. ' +
        'Anyone under the age of 18 must also complete an online induction before their PIN is activated.';
    }
    else if (input == "What do I do if I have lost something in The Gym?" || input == "what do I do if I have lost something in The Gym?" ) {
        return 'The fastest and easiest way to retrieve lost property is to head back to the gym and speak to a member of staff.';
    }
    else if (input == "What are the off-peak hours in the gym?" || input == "what are the off-peak hours in the gym?") {
        return 'These hours will depend on your chosen gym, and you can view these on your gym page under Opening hours. ' +
        'This package is currently available at a select few gyms for new members. ' +
        'To see what package is available at your club, select your gym for more information.';
    }

    //health & safety
    else if (input == "What are you doing to keep me safe?" || input == "what are you doing to keep me safe?") {
        return 'As most of our gyms are open 24 hours a day, 7 days a week there may be times our gyms are remotely supervised. ' +
        'All our gyms have 24/7 CCTV which is monitored externally when there are no staff on site. ' +
        'We also have Safety Stations and emergency contact points in case you need urgent assistance outside of staffed hours.';
    }

    //fitness questions and the responses
    else if (input == "How much cardio should I be doing?" || input == "how much cardio should I be doing?") {
        return 'If your goal is strength and lean muscle gains, you don’t want to do too much cardio. ';
    }
    else if (input == "Should I stretch before my workouts?" || input == "should I stretch before my workouts?") {
        return 'Research is mixed on this, so if you don’t want to stretch, you can skip it! ';
    }
    else if (input == "How much weight should I be lifting when I strength train?" || input == "how much weight should I be lifting when I strength train?") {
        return 'When you choose a weight for strength training, pick a weight that’s “heavy for you.”';
    }
    else if (input == "How to lose weight and tone up fast?" || input == "how to lose weight and tone up fast?") {
        return 'You can absolutely burn fat and build muscle at the same time, but it takes conscious nutrition and training. ';
    }
    else if (input == "What should I do about muscle soreness?" || input == "what should I do about muscle soreness?") {
        return 'Sore muscles do not mean that you had a *good workout* and you shouldn’t aim to be seriously sore after each session.  ';
    }
    else if (input == "How often should I work out?" || input == "how often should I work out?") {
        return 'This depends on intensity and your goals. If your goal is general movement, ' +
        'your ideal amount of workout days will be different than someone who is training for a grueling athletic event. ' +
        'You could train 2-7 times per week, depending on intensity.  ';
    }

    else if (input == "I love Jungle Workout Studio!") {
        return 'I love you too. ';
    }

    // Simple responses
    if (input == "hello" || input == "Hello" || input == "Hi" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "Goodbye" || input ==  "Bye" || input ==  "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

    
}
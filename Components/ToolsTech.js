import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../assets/colors'
import GlobalHeader from './GlobalComponents/GlobalHeader'

const ToolsTech = () => {
  return (
    <View style={styles.mainContainer}>
                <GlobalHeader title={"Back"} route={"Education"}/>

        <KeyboardAwareScrollView>
            <View style={styles.innerContainer}>
                <Text style={styles.textStyles}>
                1. Rythu Bandhu Scheme (AISS):
                </Text>
                <Text style={styles.textStyles1}>
                Telangana Government has proposed a new scheme for providing investment support to
Agriculture and Horticulture crops by way of a grant @ Rs.5000/- per Acre per Farmer
in each season (Kharif & Rabi) for purchase of inputs like Seeds, Fertilizers, Pesticides,
towards Labour and other Investments in the field operations of farmers choice for the
crop season.</Text>
<Text style={styles.textStyles}>
2. Rythu Bandhu - Farmers Group Life Insurance Scheme: (Rythu Bhima)
                </Text>
                <Text style={styles.textStyles1}>
                Telangana Government decided to implement the prestigious scheme of "Rythu Bandhu
Group Life Insurance Scheme for Farmers" for the welfare of farming community in the
State. The main objective of the scheme is to provide immediate and adequate financial
relief to bereaved family members/dependents of the farmer in case of his/her death due
to any reason. Majority of the farmers are small and marginal farmers and farming is the
sole source of livelihood to them. In the event of death of the bread earner, the dependent
family members will land in distress due to financial problems. The sum assured Rs
5,00,000/- payable to the Nominee designated by the insured farmer.</Text>
<Text style={styles.textStyles}>
3. Soil Health Card Scheme (SHC)
                </Text>
                <Text style={styles.textStyles1}>
                “National Mission for Sustainable Agriculture (NMSA) will be implemented during
12th Plan with the following objectives
 To make agriculture more productive, sustainable and climate resilient;
 To conserve natural resources;
 To adopt comprehensive soil health management practices
 To optimize utilization of water resources; etc.
“Soil Health Management (SHM) is one of the most important interventions under
NMSA, SHM aims at promoting Integrated Nutrient Management (INM) through
judicious use of chemical fertilizers including secondary and micro nutrients in
conjunction with organic manures and bio-fertilizers for improving soil health and its
productivity; strengthening of soil and fertilizer testing facilities to provide soil test based
 Agricultural related schemes in Telangana
recommendations to farmers for improving soil fertility; ensuring quality control
requirements of fertilizers, bio-fertilizers and organic fertilizers under Fertilizer Control
Order, 1985; up gradation of skill and knowledge of soil testing laboratory staff, extension
staff and farmers through training and demonstrations; promoting organic farming
practices etc.</Text>
<Text style={styles.textStyles}>
4. Subsidy Seed Distribution 
                </Text>
                <Text style={styles.textStyles1}>
                The major objective of this scheme is to distribute various Crop Seeds like Paddy, Jowar,
Maize, Redgram, Greengram, Blackgram, Bengalgram, Groundnut, Castor and Green
manure on subsidy to Farmers. Subsidy pattern may vary from crop seed to crop seed.</Text>
<Text style={styles.textStyles}>
5. Seed Village Programme
                </Text>
                <Text style={styles.textStyles1}>
                The Seed Village Programme is one of the important components of the Sub Mission on
Seed and Planting Material (SMSP) under National Mission on Agriculture Extension &
Technology (NMAET) being implemented by Government of India. The Seed Village
programme ensures supply of quality seed of notified varieties to the farmers in time at
their places at affordable prices besides ensuring quick multiplication of new seed
varieties in a shorter time in that mandal/district based on the crop situation.
Objectives:
The basic objectives of the Seed Village Programme are:{"\n"}
A) To improve the quality of Farm saved Seeds.{"\n"}
B) To increase the Seed Replacement Rate (SRR).{"\n"}
C) To enhance the horizontal spread of high yielding varieties among farmers for
improving the productivity of crops.{"\n"}
 Financial assistance @ 50% subsidy is available for distribution of
 Foundation/certified seeds of Cereals for 1 acre per farmer per crop each season.
 Financial assistance @ 60% subsidy is available for distribution of
 Foundation/certified seeds of Pulses, Oil seeds and Green manure seeds for 1 acre
per farmer per crop each season.</Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
  )
}

export default ToolsTech

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        backgroundColor:colors.primary,
        alignItems:"center"
    },
    innerContainer:{
        padding:"10%",
        // backgroundColor:"red",
        // alignItems:"center"
    
    },
    textStyles:{
        padding:"2%",
        // backgroundColor:"blue",
        color:"white",
        fontSize:16,
        fontWeight:"600",
        // marginTop:"3%",
        paddingBottom:"5%"
    },
    textStyles1:{
        padding:"2%",
        // backgroundColor:"blue",
        color:"white",
        fontSize:15,
        paddingBottom:"5%"
        // fontWeight:"600"
    },

})
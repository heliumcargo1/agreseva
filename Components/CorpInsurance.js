import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from '../assets/colors'
import GlobalHeader from './GlobalComponents/GlobalHeader'

const CorpInsurance = () => {
  return (
    <View style={styles.mainContainer}>
                <GlobalHeader title={"Back"} route={"Education"}/>

        <KeyboardAwareScrollView>
            <View style={styles.innerContainer}>
                <Text style={styles.textStyles}>
                1. Pradhan Mantri Fasal Bima Yojana
                </Text>
                <Text style={styles.textStyles1}>
                Insurance protection for food crops, oilseeds and annual horticultural/commercial crops notified by state government.
Uniform maximum premium for all farmers:
Kharif season - 2% of sum insured.
Rabi Season 1.5% of sum insured.
Annual commercial/horticultural crops - 5% of sum insured
The difference between actual premium and the rate of Insurance payable by farmers shall be shared equally by the Centre and State.
Claims of full Sum Insured (SI), without capping or reduction in SI.
If the sowing is not done due to adverse weather/climate, claims upto 25% of sum insured will be paid for prevented sowing/planting risk.
When the crop yield is less than the guaranteed yield of notified crops,the claim payment equal to shortfall in yield is payable to all insured farmers.
If 50% loss in mid season of crop then on account advance payment, upto 25% of likely claims will be paid as immediate relief.
Losses caused due to inundation, hail storm and landslide would be assessed at individual farm level.
Post harvest losses assessment for damage to crops in cut and spread in the field up to 14 days on account of cyclonic rain and unseasonal rain in the entire country.
Use of remote sensing Technology and drones to supplement Crop cutting experiments for faster settlement of claims.
Implementing agency will be selected by the State Government through bid.</Text>
<Text style={styles.textStyles}>
2. Weather Based Crop Insurance Scheme (WBCIS)
                </Text>
                <Text style={styles.textStyles1}>
                Insurance protection for notified food crops, oilseeds and horticultural /commercial crops
Uniform maximum premium for all farmers like PMFBY :
Kharif season - 2% of sum insured.
Rabi Season 1.5% of sum insured.
Commercial/horticultural crops 5% of sum insured.
The difference between actual premium and the rate of Insurance payable by farmers shall be shared equally by the Centre and State.
When the Weather indices (rainfall/temperature/relative humidity/wind speed etc) is different (less/ higher) from the Guaranteed Weather Index of notified crops, the claim payment equal to deviation/shortfall is payable to all insured farmers of notified area.
Provision for assessment of losses caused by hailstorm and cloud burst at individual farm level.
Implementing agency will be selected by the State Government through bid.</Text>
<Text style={styles.textStyles}>
3. Coconut Palm Insurance Scheme (CPIS)
                </Text>
                <Text style={styles.textStyles1}>
                Insurance protection for Coconut Palm growers.
Premium rate per palm ranges from Rs. 9.00 (in the plant age group of 4 to 15 years) to Rs. 14.00 (in the plant age group of 16-60 years).
50-75% subsidy of premium is provided to all types of farmers.
When the palm damaged, the claim payment equal to input cost loss damage is payable to the insured in notified areas.</Text>
<Text style={styles.textStyles}>
4. Unified Package Insurance Scheme (UPIS) as pilot in 45 districts
                </Text>
                <Text style={styles.textStyles1}>
                To provide financial protection and comprehensive risk coverage of crops, assets, life and student safety to farmers.
Pilot will include 7 section Viz.., - Crop Insurance (PMFBY / WBCIS), Loss of life (Pradhan Mantri Jeevan Jyoti Bima Yojna (PMJJBY)), Accident Insurance (Pradhan Mantri Suraksha Bima Yojana - PMSBY) , Student safety, Household, Agriculture implements and Tractor.
Crop insurance will be compulsory. However farmers can choose atleast 2 sections from remaining.
Farmers may be able to get all requisite insurance products for farmers through one simple proposal/ application Form and through single window.
Two flagship schemes of the Government viz PMSBY & PMJJBY have been included apart from insurance of assets.
Pilot scheme will be implemented through single window.
Processing of claims (other than Crop Insurance) on the basis of individual claim report.
</Text>

            </View>
        </KeyboardAwareScrollView>
    </View>
  )
}

export default CorpInsurance

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
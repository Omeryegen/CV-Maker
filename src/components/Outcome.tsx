import { useAppSelector } from '../hooks'
import { RootState } from '../store'
import { Page, Text, View, Document ,  StyleSheet, PDFViewer, Font, Image, Link, BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import { useDispatch } from 'react-redux';
import { setUrl } from '../features/resumee/ResumeeSlice';


Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf", fontWeight: 300 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf", fontWeight: 400 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf", fontWeight: 500 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf", fontWeight: 600 },
    
  ]
 
});
  
function Outcome() {
    const resumee = useAppSelector((state: RootState) => state.resumee)
    const dispatch = useDispatch()
    const level = (input: number)=>{
      if(input < 30){
        return "red"
      }else if(input > 30 && input < 80){
        return "orange"
      }else{
        return "green"
      }
    }
    const styles = StyleSheet.create({
      body: {
        backgroundColor: '#fff',
        fontFamily: "Roboto",
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'row'
      },
      showcaseLeft:{
        width: '25%',
        backgroundColor: resumee.theme,
        height: '100%',
        display: 'flex',
        flexDirection:'column',
        
      },
      showcaseRight:{
        width: '75%',
      },
      viewer: {
        width: '100%',
        height: 700,
        overflow: 'hidden'
      },
      avatar : {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '90%',
        marginTop: 40,
        marginBottom: 10
      },
     
      img: {
        borderRadius: '50%',
        width: 70,
        height: 70,
      },
      textPrimary: {
        color:'white',
        fontSize: '12'
      },
      textSecondary: {
        color: 'white',
        fontSize: 10,
        marginBottom: 2
      },
      flexCol: {
        display: 'flex', 
      
        flexDirection:'column'
      },
      textDate: {
        fontSize: 8,
        color:'white',
        marginBottom: 2
      },
      flexRow: {
        display: 'flex',
        flexDirection:'row',
      },
      heading: {
        color:'black',
        fontSize: 16
      },
      rightContainer: {
        padding: 20
      },
      line : {width: '90%', height: '5', borderRadius: '50%', backgroundColor: resumee.theme, marginBottom: 20}
    });
  return (
   <PDFDownloadLink document={<Document >
      <Page size="A4" style={styles.body}>
      <View style={styles.showcaseLeft}>
          <View  style={styles.avatar} >
            <Image  style={styles.img} source={resumee.image.length > 2 ?  resumee.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}/>
          </View>
          <View style={[styles.flexCol, {marginBottom: 30, marginLeft: 25}]} > 
            <Text style={styles.textPrimary}>{resumee.contact.name + " " + resumee.contact.surname}</Text>
            <Text style={styles.textSecondary}>{resumee.contact.occupation}</Text>
          
          </View>
        
          <View style={{marginBottom: 30, marginLeft: 20}} >
            <Text style={[styles.textPrimary, {marginBottom: 5}]}>Education</Text>
            {
              resumee.education.map((element: any)=>{
                return(
                  <View>
                    <Text style={styles.textSecondary}>{element.university}</Text>
                    <Text style={styles.textSecondary}>{element.department}</Text>
                    <Text style={styles.textDate}>{new Date(element.start).toLocaleDateString()} / {new Date(element.end).toLocaleDateString()}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={{marginBottom: 20, marginLeft: 20}} >
            <Text style={[styles.textPrimary, {marginBottom: 5}]}>Languages</Text>
            {
              resumee.languages.map((element: any)=>{
                return(
                  <View style={styles.flexRow}>
                    <Text style={styles.textSecondary}>{element.language}:{element.langLevel}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={{marginBottom:20, marginLeft: 20}}>
            <Text style={[styles.textPrimary, {marginBottom: 5}]}>Personal</Text>
            <View >
              <Text style={styles.textDate}>Birthday: {new Date(resumee.contact.birthday).toLocaleDateString()}</Text>
              <Text style={styles.textDate}>{resumee.contact.phone}</Text>
              <Text style={styles.textDate}>{resumee.contact.email}</Text>
              <Text style={styles.textDate}>{resumee.contact.adress}</Text>
            </View>
          </View>
          <View style={{marginBottom: 20, marginLeft: 20}} >
            <Text style={[styles.textPrimary, {marginBottom: 5}]}>Socials</Text>
            {
              resumee.socials.map((element: any)=>{
                return(
                  <View style={styles.flexRow}>
                    <Link src={element.link} style={styles.textSecondary}>{element.platform}</Link>
                  </View>
                )
              })
            }
          </View>
        </View>
      <View style={styles.showcaseRight}>
          <View style={styles.rightContainer}>
            <Text style={[styles.heading, {marginBottom: 20}]}>Experiences</Text>
            <View style={styles.line}></View>
            {
              resumee.experience.map((element: any)=>{
                return (
                  <View style={[styles.flexCol, {marginBottom: 10}]}>
                    <Text style={[styles.textPrimary, {color:'black', marginRight: 20, fontWeight:'light'}]} >Company: {element.company}</Text>
                    <Text style={[styles.textPrimary, {color:'black', fontWeight:'light'}]} >Position: {element.position}</Text>
                    <Text style={[styles.textPrimary, {color:'black', fontWeight:'light'}]} >{new Date(element.start).toLocaleDateString()} / {new Date(element.end).toLocaleDateString()}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={styles.rightContainer}>
            <Text style={[styles.heading, {marginBottom: 20}]}>Skills</Text>
            <View style={styles.line}></View>
            {
              resumee.skills.map((element: any)=>{
                return (
                  <View style={[styles.flexCol, {marginBottom: 10}]}>
                    <Text style={[styles.textPrimary, {color:'black', marginRight: 20, fontWeight:'light'}]} >Skill: {element.skill}</Text>
                    <View style={[styles.flexRow, {alignItems:'center'}]}>
                      <Text style={[styles.textPrimary, {color:'black', fontWeight:'light'}]}>Level: </Text>
                      <View style={{width: element.skillLevel / 1.1, height: '8',backgroundColor: level(element.skillLevel), borderRadius: '50%'}}></View>
                    </View> 
                    <View></View>
                  </View>
                )
              })
            }
          </View>
          <View style={styles.rightContainer}>
            <Text style={[styles.heading, {marginBottom: 20}]}>Summary</Text>
            <View style={styles.line}></View>
          <Text style={[styles.textSecondary, {color: 'black', lineHeight: 2}]} >{resumee.summary}</Text>
          </View>
      </View>
      </Page>
  </Document>}>
  {({ blob, url, loading, error }) => {
    console.log(url)
    dispatch(setUrl(url))
    return (
      <button className='btn btn-primary w-full' > Download PDF</button>
    )
    }}
   </PDFDownloadLink>
    
        
    
  )
}

export default Outcome
import Section from "@/layouts/Section"
import "./Devices.scss"
import Grid from "@/components/Grid"
import DevicesCard from "@/components/DevicesCard"

const Devices = () => {
  const deviceItems = [
    {
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/smartphones.svg",
    },
    {
      title: "Tablet",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/tablet.svg",
    },
    {
      title: "Smart TV",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/smart-tv.svg",
    },
    {
      title: "Laptops",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/laptops.svg",
    },
    {
      title: "Gaming Consoles",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/gaming-consoles.svg",
    },
    {
      title: "VR Headsets ",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/vr-headsets.svg",
    },
  ]

  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    >
      <Grid columns={3}>
        {deviceItems.map((deviceItem, index) => (
          <DevicesCard {...deviceItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Devices

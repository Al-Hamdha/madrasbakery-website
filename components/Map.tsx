const Map = () => {
  return (
    <div className="container py-8 space-y-8">
      <div className="">
        <p className="font-display mb-6 text-center leading-tight text-4xl md:text-5xl">
          Drop by and <br className="md:hidden" /> try them all!
        </p>
        <p className="text-lg text-muted-foreground text-center">
          They taste just as good as they look, no cap! Curious? Come find us at
          the heart of town, Masjid India in Kuala Lumpur.
        </p>
      </div>
      <div className="mx-auto overflow-hidden rounded-3xl resize-none h-72">
        <div
          id="g-mapdisplay"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            className="h-full w-full hue-rotate-180 invert brightness-75 contrast-150"
            src="https://www.google.com/maps/embed/v1/place?q=Madras+Bakery+-+Masjid+India,+Jalan+Masjid+India,+Kuala+Lumpur+City+Centre,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "#g-mapdisplay img{max-height:none;max-width:none!important;background:none!important;}",
          }}
        />
      </div>
    </div>
  );
};
export default Map;

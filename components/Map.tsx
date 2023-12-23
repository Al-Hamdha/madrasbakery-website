const Map = () => {
  return (
    <div className="container">
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

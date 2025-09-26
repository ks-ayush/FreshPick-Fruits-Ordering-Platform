"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./components/ImageSlider";

import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="bg-yellow-200 py-5">
        <nav>
          <ul className=" flex gap-44 items-center text-black">
            <ul className="flex justify-start mx-7 gap-28">
            </ul>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold text-center text-amber-700 m-5">Welcome to Fresh Pick</h1>
        <p className="text-center mt-4  text-amber-700">Your one-stop solution for all your fresh produce needs.</p>
        <div className="flex justify-center pt-5">
          <ul>
            <li>
              <Link href={"/Buyfruits"}>
                <button className="btn btn-soft btn-accent w-40">BUY FRUITS NOW</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="grid grid-cols-2 gap-64 ">
        <div>
          <h2 className="text-2xl font-bold text-center text-amber-700 m-5">Why Choose Fresh Pick?</h2>
          <p className="text-center mt-4  text-amber-700">We provide the freshest fruits sourced directly from local farmers.</p>
          <p className="text-center mt-4  text-amber-700">Our platform connects you with local farmers, ensuring that you get the freshest produce available.</p>
          <p className="text-center mt-4  text-amber-700">We offer a wide variety of fruits, including seasonal and exotic options.</p>
          <p className="text-center mt-4  text-amber-700">Our user-friendly interface makes it easy to browse and order your favorite fruits.</p>
          <p className="text-center mt-4  text-amber-700">We prioritize sustainability and support local farmers.</p>
        </div>
        <div>
          <div className="flex justify-center m-2" >
            <Image src="https://images.slurrp.com/prod/articles/y2iaiub4w3b.webp" alt="Variety of fruits" width={500} height={300} />
          </div>
        </div>
      </section>
      <div>
        <ImageSlider />
      </div>
      <div className="mt-3 bg-white">
        <h2 className="flex text-amber-300 justify-center text-4xl">MEET OUR</h2>
        <h1 className="flex justify-center text-emerald-600 text-6xl">LINEUP</h1>
        <p className="flex justify-center text-black text-2xl">There are so many mangos to enjoy. </p>
        <p className="flex justify-center text-2xl text-black">Below is your go-to guide for some of the most popular varieties on the market.</p>
        <section className="grid grid-cols-3 gap-4 items-center justify-items-center  text-green-500 my-16 mx-12">
          <div className="border-2 border-amber-200 p-4 m-3">
            <h1 className="text-3xl">Amrapali</h1>
            <p className="m-3 text-amber-700">
              This mango offers small, subtle hints of tropical fruit and citrus aroma.
              The flavor is more tart than sweet, and fibers throughout the flesh add an exciting texture to each bite.
            </p>
          </div>
          <div className="border-2 border-amber-200 p-10 m-3">
            <h1 className="text-3xl">Honey (Ataulfo)</h1>
            <p className="text-amber-700">Like the name suggests, this particular
              mango is a brilliant vibrant yellow, offering a tropical, peachy aroma and a sweet and sour flavor experience.
            </p>
          </div>
          <div className="border-2 border-amber-200 p-6 m-3">
            <h1 className="text-3xl">Kent</h1>
            <p className="text-amber-700">This mango is juicy, sweet and boasts an enticing tropical aroma.
              Its gorgeous dark green skin protects bright yellow flesh,
              making it the perfect colorful addition to any plate.</p>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-4 items-center justify-items-center  text-green-500 my-16 mx-12">
          <div className="border-2 border-amber-200 p-7 m-3">
            <h1 className="text-3xl">Langra</h1>
            <p className="m-3 text-amber-700">
              These green blushing beauties are as sweet as can be Each bite is firm,
              juicy and better than the last.
            </p>
          </div>
          <div className="border-2 border-amber-200 p-10 m-3">
            <h1 className="text-3xl">Himsagar</h1>
            <p className="text-amber-700">
              Carrying a dreamy aroma of peaches, Francis mangos offer a sweet, fruity
              explosion of flavor with every bite.
            </p>
          </div>
          <div className="border-2 border-amber-200 p-9 m-3">
            <h1 className="text-3xl">Neelam</h1>
            <p className="text-amber-700">
              This vibrant canvas of bright red, green and yellow opens to reveal a
              tantalizing mix of sweet, sour and just a hint of bitter tropical bliss.
            </p>
          </div>
        </section>
        <div className="justify-center mt-2.5 bg-rose-800">
          <h2 className="flex justify-center text-4xl gap-3.5 py-1.5">Additional</h2>
          <h1 className="flex justify-center text-5xl text-amber-300">Varieties of mangos</h1>
          <p className="flex justify-center py-1 text-2xl">Although the six varieties mentioned above represent the most commonly </p>
          <p className="flex justify-center text-2xl py-1">available mango varieties in the INDIAN market, there are others that you can find as well. </p>
          <p className="flex justify-center text-2xl py-1 text-white"> With hundreds of varieties, the possibilities are endless</p>
        </div>
        <section className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex justify-start px-20 py-4  border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-amber-700">ALPHONSE</p>
            <div className="flex justify-end mx-32"><button type="button" onClick={() => document.getElementById('my_modal_12').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_12" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">ALPHONSE</h3>
                  <p className="py-4">The Alphonso mango is a named mango cultivar that originates from India. In the UK in 2012, it was considered one of the most prized mangoes,
                    known for its saffron-coloured flesh and culinary uses in various dishes and desserts</p>
                  {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ALPHONSO_MANGO.jpg/500px-ALPHONSO_MANGO.jpg" alt="Alphonso Mango" width={500} height={375} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-amber-700">EDWARD</p>
            <div className="flex justify-end mx-32"><button type="button" onClick={() => document.getElementById('my_modal_11').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">EDWARD</h3>
                  <p className="py-4">The Edward mango is a popular variety known for its vibrant yellow skin with a pink or reddish blush, and small yellow dots.
                    The fruit is oval or oblong in shape, typically weighing between 16 and 22 ounces. Its flesh is tender, fiberless, and juicy, with a rich, sweet flavor and a pleasant aroma. Edward mangoes are a Haden seedling, likely a cross between Haden and Philippine-Carabao varieties, and are widely considered one of the best-tasting mangoes in Florida.</p>
                  {/* <Image src="/images/edward.jpg" alt="Edward Mango" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 ">
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-amber-700">KESAR</p>
            <div className="flex justify-end mx-40"><button type="button" onClick={() => document.getElementById('my_modal_10').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">KESAR</h3>
                  <p className="py-4">The Kesar mango, often called the Queen of Mangoes is a highly prized mango variety originating from the Gir region of Gujarat, India.
                    It is known for its vibrant saffron-colored flesh, a distinct aroma, and a rich, sweet flavor, making it a favorite among mango enthusiasts. The Kesar mango is distinct from other mangoes, especially the Alphonso, due to its resilience to arid conditions, making it uniquely suited to Gujarat climate. </p>
                  {/* <Image src="/images/kesar.jpg" alt="Kesar Mango" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-amber-700">MANILA</p>
            <div className="flex justify-end mx-36"><button type="button" onClick={() => document.getElementById('my_modal_9').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_9" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">MANILA</h3>
                  <p className="py-4">The Manila mango, also known as the Philippine mango or Carabao mango, is a particularly sweet mango variety from the Philippines.
                    Its named after the carabao, the national animal of the Philippines. The Manila mango was brought from the Philippines to Mexico by Spanish sailors, and some of its cultivars, like Ataulfo and Manilita, are now grown in Mexico and the United States. </p>
                  {/* <Image src="/images/manila.jpg" alt="Manila Mango" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 ">
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 mx-28 my-4">
            <p className="text-amber-700">PALMER</p>
            <div className="flex justify-end mx-36"><button type="button" onClick={() => document.getElementById('my_modal_8').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">PALMER</h3>
                  <p className="py-4">The Palmer mango is a large, late-season mango variety known for its vibrant reddish-yellow skin, minimal fiber, and exotic flavor.
                    Originating in South Florida, it is grown commercially in Florida, other parts of the United States, Africa, and Australia. In India, it is a new emerging variety, particularly successful in commercial cultivation.</p>
                  {/* <Image src="https://www.mangodatabase.com/images/varieties/whc6669bf0576c65_P7vN39SOZy_LUgxMwgJ7H.jpg" alt="Palmer Mango" width={500} height={375} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 mx-28 my-4">
            <p className="text-amber-700">MIYAZAKI</p>
            <div className="flex justify-end mx-32"><button type="button" onClick={() => document.getElementById('my_modal_7').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">MIYAZAKI</h3>
                  <p className="py-4">The Miyazaki mango, also known as Egg of the Sun Taiyo no Tamago, is a highly prized and expensive mango variety grown in Japan Miyazaki Prefecture.
                    It is renowned for its intense sweetness, smooth texture, vibrant red skin, and strong fragrance. The mangoes are carefully cultivated, often hand-picked, and undergo strict quality control to ensure they meet specific standards, contributing to their high price. </p>
                  {/* <Image src="/images/miyazaki.jpg" alt="Miyazaki Mango" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <div className=" py-14">
          <h2 className="flex justify-center text-3xl text-green-700">GET TO KNOW</h2>
          <h1 className="flex justify-center text-4xl text-green-300">YOUR MANGO</h1>
          <p className=" text-2xl text-black py-2.5 flex justify-center">Learn the basics of selecting a perfect mango, how to cut it, get delicious</p>
          <p className=" text-2xl text-black flex justify-center">recipes and learn about the mango varieties you can find in stores.</p>
        </div>
        <section className="grid grid-cols-2 gap-4 ">
          <div>
            <p className="text-green-400 text-2xl px-20">Choosing and Ripening Mangos</p>
            <p className="flex justify-center text-black py-2.5 px-2">To choose a ripe mango, focus on feel and aroma, rather than color. A ripe mango will yield
              slightly to gentle pressure, like a peach or avocado, and have a sweet, tropical scent near the stem.
              To ripen mangoes at home, place them in a paper bag at room temperature, or with other ethylene-producing fruits like
              bananas or apples. </p>
          </div>
          <div>
            <p className="text-green-400 text-2xl px-20">How to Cut a Mango</p>
            <p className="flex justify-center text-black py-2.5 px-2">To cut a mango effectively and efficiently, start by peeling the mango with a vegetable peeler or a sharp knife.
              Then, cut the mango away from the large, oblong pit by slicing vertically along both sides of the pit, creating two cheeks. You can
              then either score the flesh and flip it inside out to remove cubes, or simply slice the flesh off the pits and the side.</p>
          </div>
        </section>
        <div className="justify-center my-2.5 py-2 bg-rose-800">
          <h2 className="flex justify-center text-4xl gap-3.5 py-1.5">LETS SEE</h2>
          <h1 className="flex justify-center text-5xl text-green-400">Varieties of Lychee</h1>
        </div>
        <section className="grid grid-cols-2 gap-4 pt-3 ">
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-green-400">MUZAFFARPUR</p>
            <div className="flex justify-end mx-24"><button type="button" onClick={() => document.getElementById('my_modal_6').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">MUZAFFARPUR</h3>
                  <p className="py-4">Muzaffarpur, a district in Bihar, India, is renowned for its lychee production, particularly the Shahi and China varieties. The region cultivates litchi on about 25,800 hectares,
                    producing around 300,000 tonnes annually. Wikipedia says that Bihar contributes about 40% of Indias total lychee production, with Muzaffarpur being a major center. </p>
                  {/* <Image src="/images/muzaffarpur.jpg" alt="Muzaffarpur Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-green-400">SHAHI</p>
            <div className="flex justify-end mx-36"><button type="button" onClick={() => document.getElementById('my_modal_5').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">SHAHI</h3>
                  <p className="py-4">Shahi litchi is a well-known variety of litchi, commercially cultivated in the Muzaffarpur area of Bihar, India. It&apos;s known for its distinct rose scent, hence also referred to as Rose Scented.
                    The Shahi litchi ripens early, typically during the second week of May in Jharkhand and North Bihar, and by the first week of June in the Terai
                    region of Uttaranchal. </p>
                  {/* <Image src="/images/shahi.jpg" alt="Shahi Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 ">
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-green-400">KASBA</p>
            <div className="flex justify-end mx-40"><button type="button" onClick={() => document.getElementById('my_modal_4').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">KASBA</h3>
                  <p className="py-4">The KASBA lychee is a highly regarded variety in northern India, known for its excellent taste and suitability for table consumption. Its a late-season variety, with fruits ripening in the last week of June.
                    This lychee variety is also adaptable to hotter areas if they receive proper protection from strong winds and adequate irrigation. </p>
                  {/* <Image src="/images/kasba.jpg" alt="Kasba Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 my-4 mx-28">
            <p className="text-green-400">PURBI</p>
            <div className="flex justify-end mx-36"><button type="button" onClick={() => document.getElementById('my_modal_3').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">PURBI</h3>
                  <p className="py-4">PURBI refers to a specific lychee cultivar, also known as China, Calcuttia, Bengalia, or Bombaiya, which is a significant variety in India.
                    This cultivar is characterized by ripening later than most other lychee varieties, typically after they have been harvested. </p>
                  {/* <Image src="/images/purbi.jpg" alt="Purbi Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 pb-9 ">
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 mx-28 my-4">
            <p className="text-green-400">SWARNA</p>
            <div className="flex justify-end mx-36"><button type="button" onClick={() => document.getElementById('my_modal_2').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">SWARNA</h3>
                  <p className="py-4">SWARNA Roopa is a lychee variety, a selection identified and released by CHES, Ranchi, known for its heavy bearing, large fruits, and resistance to fruit cracking.
                    Its also the first variety developed in India, characterized by high Total Soluble Solids. The Swarna lychee is an important cultivar in Bihar and surrounding areas, producing an average yield of 80-100 kg per tree. </p>
                  {/* <Image src="/images/swarna.jpg" alt="Swarna Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <div className="flex justify-start px-20 py-4 border-2 border-amber-400 h-14 mx-28 my-4">
            <p className="text-green-400 flex justify-start">ROSESCENTED</p>
            <div className="flex justify-end mx-20"><button type="button" onClick={() => document.getElementById('my_modal_1').showModal()} className="w-40 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm  dark:focus:ring-yellow-900">SEE MORE</button>
              <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">ROSESCENTED</h3>
                  <p className="py-4">Rose Scented lychee is a popular cultivar of lychee known for its distinct rose-like aroma.
                    It is widely grown in India, particularly in regions like North Bihar, Jharkhand, Uttaranchal, and Uttar Pradesh.The fruit is known for its high quality, with a light vegetative flush,
                    and matures early, typically during the second week of May to the first week of june </p>
                  {/* <Image src="/images/rosescented.jpg" alt="Rose Scented Lychee" width={500} height={500} /> */}
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
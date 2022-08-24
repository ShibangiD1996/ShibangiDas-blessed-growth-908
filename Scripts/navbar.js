let Navbar_HTML = `<div>
<div class="nav1">
  <div id="links">
    <div id="kindmeal_logo">
      <img src="https://www.kindmeal.my/images/logo-kindmeal.png" />
    </div>
    <div id="navigate">
      <div>
        <img
          class="media_link"
          src="https://www.kindmeal.my/images/follow_blog_grey.png"
        />
      </div>
      <div>
        <img
          class="media_link"
          src="https://www.kindmeal.my/images/follow_facebook_grey.png"
        />
      </div>
      <div>
        <img
          class="media_link"
          src="https://www.kindmeal.my/images/follow_twitter_grey.png"
        />
      </div>
    </div>
  </div>
  <div class="top_right_menu">
    <div>
      <p>Login</p>
    </div>
    <div>
      <button id="fb">
        <a
          class="decorate1"
          href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9050478%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw9ZGYBhCEARIsAEUXITXmBzNrbc11rj86QonN3krZyQoqQTtSWV7LGV90onxFAKu6PVKcyfkaAuvWEALw_wcB"
          >Facebook</a
        >
      </button>
    </div>
    <div>
      <button id="mail">
        <a class="decorate2" href="./signin.html">Email</a>
      </button>
    </div>
    <div>
      <p><a class="decorate3" href="./popup.html">Sign up</a></p>
    </div>
  </div>
</div>

<div class="nav2">
  <a href="./index.html">Home</a>
  <a href="./mealdeal.html">Meal Deals</a>
  <a href="./kindmoments.html">KindMoments</a>
  <a href="./hotpics.html">Hot Pics</a>
  <a href="./reciepies.html">Reciepies</a>
  <a href="./directory.html">Directory</a>
  <a href="./articles.html">Articles</a>
  <a href="./help.html">Help</a>
</div>
</div>`;

let Navbar = document.querySelector("nav");
Navbar.innerHTML = Navbar_HTML;

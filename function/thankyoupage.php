<?php

class ThankYou
{
  private $result;

  function getThankYouPage($thankpages)
  {
    $thankpages = json_decode($thankpages);
    $code = "";
    $codeheader = "";
    $i = 0;

  
    $codeheader .= ' <div>' . $thankpages[0]->tydescription . '</div>';

    foreach ($thankpages as $thankpage) {
     
      
     
      $thankpage->url=str_replace("source=","source=".$_SESSION['offer'],$thankpage->url) ;
      $thankpage->url=str_replace("sub1=","sub1=".$_SERVER["SERVER_NAME"]."".substr($_SERVER["REQUEST_URI"],0,stripos($_SERVER["REQUEST_URI"], '/?')+1),$thankpage->url) ;
   
      $code .= '<div class="web col-lg-4 col-md-4 col-sm-12 col-12"> <div id="boximage' . $i . '" ><img src="../images/uploads/' . $thankpage->image . '" alt="panel icon"> </div>';
      $code .= ' <div class="boxtitle' . $i . '"> <h4>' . $thankpage->title . '</h4></div>';
      //  $code.='  <div class="boxsubtitle'.$i.'"> <h3>'.$thankpage->subtitle.'</h4></div>';
      $code .= ' <div class="list boxdescription' . $i . '">' . $thankpage->description . '</div>';
      $code .= '  <div class="boxcalltoaction' . $i . '">  <a class="btn btn-thanks" href="' . $thankpage->url . '">' . $thankpage->calltoaction . '</a></div>';
      $code .= '</div>';
      $i++;
    }

    $datathpg[0] = $code;
    $datathpg[1] = $codeheader;
    return $this->result = $datathpg;
  }
}

?>

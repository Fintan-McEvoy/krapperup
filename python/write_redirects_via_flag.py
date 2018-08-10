
for i in range(1,17):


    wrapper1 =  """<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
    <html>
    <meta http-equiv="content-type" content="text/html; charset=utf-8>
    <head>
    <title>Krapperup</title>
    <link rel="stylesheet" type="text/css" href="../posters_style.css">

    <style>
    div {
    border: 0px solid black;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 150px;
    margin-left: 150px;
    background-color:;
    }
    </style>


  

    </head>
    <table >
    <tr >
    <td>
    <div>
    <a href='../english/poster_"""+str(i)+"""_english.html?id="""+str(i)+"""&la=english'>
    <img src = '../flags/GBsq.png' style="width:50%">
    </a>
    </div>
    </td>
     
    
   
    <td>
    <div>
    <a href='../deutsch/poster_"""+str(i)+"""_deutsch.html?id="""+str(i)+"""&la=deutsch'>
    <img src = '../flags/DEsq.png' style="width:50%">
    </a>
    </div>
    </td>
    </tr>

    </table>
   
    </body>
    </html>"""

    f= open("redirect_poster_"+str(i)+"_via_flag.html", 'w')
    f.write(wrapper1)
    f.close()
    


for i in range(1,17):


    wrapper1 =  """<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
    <html>
    <head>
    <title>Krapperup</title>
    <meta http-equiv="refresh" content="0; URL="""

    url="'../english/poster_"+str(i)+"_english.html?id="+str(i)+"&la=english'\""
    wrapper2="""
    </head>
    <body>
    </body>
    </html>"""

    f= open("redirect_poster_"+str(i)+"_english.html", 'w')
    f.write(wrapper1  + url + wrapper2)
    f.close()
    


for i in range(1,17):


    wrapper1 =  """<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//DE">
    <html>
    <head>
    <title>Krapperup</title>
    <meta http-equiv="refresh" content="0; URL="""

    url="'../deutsch/poster_"+str(i)+"_deutsch.html?id="+str(i)+"&la=deutsch'\""
    wrapper2="""
    </head>
    <body>
    </body>
    </html>"""

    f= open("redirect_poster_"+str(i)+"_deutsch.html", 'w')
    f.write(wrapper1  + url + wrapper2)
    f.close()
    

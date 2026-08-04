export function newdate (){
                const dateobj = new Date();
                const year = dateobj.getFullYear();
                const month = String(dateobj.getMonth()+1).padStart(2, '0');
                const day = String(dateobj.getDate()).padStart(2, '0');
                const todaydate = `${year}-${month}-${day}`;

                const futureobj = new Date();

                futureobj.setDate(futureobj.getDate()+4)

                const futureYear = futureobj.getFullYear();
                const futureMonth= String(futureobj.getMonth()+1).padStart(2, '0');
                const futureDate = String(futureobj.getDate()).padStart(2, '0');

                const futuredate = `${futureYear}-${futureMonth}-${futureDate}`;
                return {
                    today : todaydate,
                    fourdaylater : futuredate
                };
                
            }
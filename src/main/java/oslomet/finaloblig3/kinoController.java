package oslomet.finaloblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kinoController {
    @Autowired
    private kinoRepository rep;

    @PostMapping("/lagreBilett")
    public void lagre (kinobilett bilett){
        rep.lagrebilett(bilett);
    }
    @GetMapping("/hentBilett")
    public List<kinobilett> retur (){
        return rep.hentBilett();
    }
    @GetMapping("/slettAlle")
    public void slettalle(){
        rep.slettAlle();
    }
    @GetMapping("/slettEnBilett")
    public void slettEnBilett(int id){
        rep.slettEnBilett(id);
    }
    @GetMapping("/hentEnBilett")
    public kinobilett bilett(int id){
        return rep.hentEnBilett(id);
    }
    @PostMapping("/endreEnBilett")
    public void endreEnBilett(kinobilett bilett){
        rep.endreEnBilett(bilett);
    }





}
